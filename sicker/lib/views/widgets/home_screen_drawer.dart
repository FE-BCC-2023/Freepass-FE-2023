import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:sicker/controllers/account_controller.dart';
import 'package:sicker/routes.dart';
import 'package:sicker/services/account_service.dart';
import 'package:sicker/utils.dart';

class HomeScreenDrawer extends StatelessWidget {
  const HomeScreenDrawer({
    super.key,
    required this.size,
    required this.accountController,
  });

  final Size size;
  final AccountController accountController;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: SafeArea(
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              width: double.infinity,
              color: Utils.mainColor,
              height: size.height * 0.25,
              child: Obx(
                () => Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    CircleAvatar(
                      radius: 60,
                      backgroundImage: NetworkImage(
                          accountController.account.value.imageUrl),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            accountController.account.value.username,
                            style: const TextStyle(
                                color: Colors.white, fontSize: 30),
                          ),
                          Text(
                            'Member Since ${accountController.account.value.createdAt.day}/${accountController.account.value.createdAt.month}/${accountController.account.value.createdAt.year}',
                            maxLines: 3,
                            style: const TextStyle(color: Colors.white),
                            overflow: TextOverflow.clip,
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              child: Column(
                children: [
                  InkWell(
                    onTap: () => Get.toNamed(Routes.updateProfile,
                        arguments: {'accountController': accountController}),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(5),
                          child: Icon(
                            Icons.edit,
                            color: Colors.grey.shade700,
                            size: 40,
                          ),
                        ),
                        const SizedBox(
                          width: 30,
                        ),
                        Text(
                          'Edit your Profile',
                          style: TextStyle(color: Colors.grey.shade700),
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
            const Spacer(),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                    onPressed: () async {
                      final box = GetStorage();
                      await box.remove('account');
                      Get.offAllNamed(Routes.login);
                    },
                    child: const Text('Log Out')),
                ElevatedButton(
                    onPressed: () async {
                      showDialog(
                        context: context,
                        builder: (context) => AlertDialog(
                          title: const Text('Are You Sure?'),
                          content: const Text(
                              'you cannot retrieve your account after doing this'),
                          actions: [
                            ElevatedButton(
                                onPressed: () async {
                                  EasyLoading.show(status: 'loading');
                                  bool isDeleted = await AccountService()
                                      .deleteAccount(
                                          accountController
                                              .account.value.username,
                                          accountController
                                              .account.value.password);
                                  if (isDeleted) {
                                    EasyLoading.showSuccess(
                                        'success delete account');
                                    final box = GetStorage();
                                    await box.remove('account');
                                    Navigator.of(context).pop();
                                    Get.offAllNamed(Routes.login);
                                  } else {
                                    EasyLoading.showError(
                                        'failed delete account');
                                    Navigator.of(context).pop();
                                  }
                                },
                                child: const Text('Yes')),
                            ElevatedButton(
                                onPressed: () {
                                  Navigator.of(context).pop();
                                },
                                child: const Text('No'))
                          ],
                        ),
                      );
                    },
                    child: const Text('Delete Account')),
              ],
            )
          ],
        ),
      ),
    );
  }
}
