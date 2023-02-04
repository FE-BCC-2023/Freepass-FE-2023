import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:sicker/models/account.dart';
import 'package:sicker/routes.dart';
import 'package:sicker/services/account_service.dart';

class AuthController extends GetxController {
  @override
  void onInit() {
    _navigateBasedOnLogin();
    super.onInit();
  }

  Future<void> _navigateBasedOnLogin() async {
    final box = GetStorage();
    final accData = await box.read('account');
    if (accData != null) {
      Account? account = await loginWithUsernamePassword(
          accData['username'], accData['password']);
      if (account != null) {
        Get.offAndToNamed(Routes.getHomeRoute(),
            arguments: {'account': account});
      }
    }
  }

  Future<Account?> loginWithUsernamePassword(
      String username, String password) async {
    try {
      Account? acc =
          await AccountService().getAccountUsingPassword(username, password);
      if (acc != null) {
        final box = GetStorage();
        await box
            .write('account', {'username': username, 'password': password});
        return acc;
      }
      return null;
    } finally {}
  }

  Future<Account?> createAccount(String username, String password) async {
    try {
      Account? acc = await AccountService().getAccountWithoutPassword(username);
      if (acc == null) {
        bool isCreated =
            await AccountService().createAccount(username, password);
        if (isCreated) {
          Account? account =
              await loginWithUsernamePassword(username, password);
          return account;
        }
      }
      return null;
    } finally {}
  }
}
