import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/get.dart';
import 'package:sicker/controllers/auth_controller.dart';
import 'package:sicker/models/account.dart';
import 'package:sicker/routes.dart';
import 'package:sicker/views/widgets/login_field.dart';

class LoginScreen extends StatelessWidget {
  LoginScreen({super.key});
  final _passwordEditingController = TextEditingController().obs;
  final _usernameEditingController = TextEditingController().obs;
  var isLogin = true.obs;
  var isObscure = true.obs;

  final AuthController authController = Get.put(AuthController());
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Obx(
            () => Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Image.asset('assets/images/login.jpg'),
                Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          isLogin.value ? 'Login' : 'Register',
                          style: const TextStyle(fontSize: 30),
                        ),
                        SizedBox(
                          child: Row(
                            children: [
                              TextButton(
                                  style: ButtonStyle(
                                      overlayColor: MaterialStateProperty.all(
                                          Colors.transparent)),
                                  onPressed: () {
                                    isLogin.value = true;
                                  },
                                  child: Text(
                                    'Login',
                                    style: TextStyle(
                                        color:
                                            isLogin.value ? null : Colors.grey),
                                  )),
                              const Text('/'),
                              TextButton(
                                  style: ButtonStyle(
                                      overlayColor: MaterialStateProperty.all(
                                          Colors.transparent)),
                                  onPressed: () {
                                    isLogin.value = false;
                                  },
                                  child: Text(
                                    'Register',
                                    style: TextStyle(
                                        color:
                                            isLogin.value ? Colors.grey : null),
                                  )),
                            ],
                          ),
                        )
                      ],
                    ),
                    SizedBox(height: size.height * 0.05),
                    LoginField(
                        usernameEditingController: _usernameEditingController,
                        isObscure: isObscure,
                        passwordEditingController: _passwordEditingController),
                  ],
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 20),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        SizedBox(
                            width: size.width * 0.9,
                            height: size.height * 0.06,
                            child: ElevatedButton(
                                style: ButtonStyle(
                                    shape: MaterialStateProperty.all(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(15)))),
                                onPressed: () async {
                                  
                                  if (isLogin.value) {
                                    EasyLoading.show(status: 'loading');
                                    Account? account = await authController
                                        .loginWithUsernamePassword(
                                            _usernameEditingController
                                                .value.text,
                                            _passwordEditingController
                                                .value.text);
                                    if (account != null) {
                                      EasyLoading.dismiss();
                                      Get.offAndToNamed(Routes.home,
                                          arguments: {'account': account});
                                    } else {
                                      EasyLoading.showError('Failed to Login',
                                          dismissOnTap: true);
                                    }
                                  } else {
                                    EasyLoading.show(status: 'loading');
                                    Account? account =
                                        await authController.createAccount(
                                            _usernameEditingController
                                                .value.text,
                                            _passwordEditingController
                                                .value.text);
                                    if (account != null) {
                                      EasyLoading.dismiss();
                                      Get.offAndToNamed(Routes.home,
                                          arguments: {'account': account});
                                    } else {
                                      EasyLoading.showError(
                                          'Failed to Register',
                                          dismissOnTap: true);
                                    }
                                  }
                                },
                                child: Obx(() => Text(
                                    isLogin.value ? 'Login' : 'Register')))),
                        SizedBox(
                          height: size.height * 0.05,
                        ),
                        const Text(
                          'Made with love by kyhchn',
                          style: TextStyle(color: Colors.grey),
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
