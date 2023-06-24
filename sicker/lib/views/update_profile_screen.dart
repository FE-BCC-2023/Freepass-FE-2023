import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/get.dart';
import 'package:sicker/controllers/account_controller.dart';

class UpdateProfileScreen extends StatelessWidget {
  UpdateProfileScreen({super.key});
  late AccountController accountController;
  @override
  Widget build(BuildContext context) {
    accountController = Get.arguments['accountController'];
    return Scaffold(
      appBar: AppBar(title: const Text('Update Profile')),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
        child: Obx(
          () => Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Center(
                child: CircleAvatar(
                  backgroundImage:
                      NetworkImage(accountController.account.value.imageUrl),
                  radius: 200,
                ),
              ),
              ElevatedButton(
                  onPressed: () async {
                    EasyLoading.show(status: 'loading');
                    bool isSuccess = await accountController.changeImage();
                    if (isSuccess) {
                      EasyLoading.showSuccess('success updating image');
                    } else {
                      EasyLoading.showError('failed updating image');
                    }

                  },
                  child: const Text('Change Image'))
            ],
          ),
        ),
      ),
    );
  }
}
