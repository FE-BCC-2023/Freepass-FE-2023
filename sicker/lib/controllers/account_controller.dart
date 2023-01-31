import 'dart:io';
import 'package:get/get.dart';
import 'package:sicker/models/account.dart';
import 'package:sicker/services/account_service.dart';
import 'package:sicker/services/image_service.dart';

class AccountController extends GetxController {
  late Rx<Account> account;
  Future<bool> changeImage() async {
    try {
      ImageService imageService = ImageService();
      String? result = await imageService.pickImage();
      if (result != null) {
        File rawImage = File(result);
        File? compressedImage =
            await imageService.testCompressAndGetFile(rawImage);
        if (compressedImage != null) {
          String? uploadedUrl =
              await imageService.uploadImage(compressedImage.path);
          if (uploadedUrl != null) {
            bool isUpdated = await AccountService()
                .updateImageUrl(uploadedUrl, account.value.username);
            if (isUpdated) {
              await updateAccount();
              return true;
            }
          }
        }
      }
      return false;
    } finally {
    }
  }

  Future<void> updateAccount() async {
    var acc = await AccountService().getAccountUsingPassword(
        account.value.username, account.value.password);
    if (acc != null) {
      account.value = acc;
    }
  }
}
