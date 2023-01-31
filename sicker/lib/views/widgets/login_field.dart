import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:sicker/utils.dart';

class LoginField extends StatelessWidget {
  const LoginField({
    super.key,
    required Rx<TextEditingController> usernameEditingController,
    required this.isObscure,
    required Rx<TextEditingController> passwordEditingController,
  })  : _usernameEditingController = usernameEditingController,
        _passwordEditingController = passwordEditingController;

  final Rx<TextEditingController> _usernameEditingController;
  final RxBool isObscure;
  final Rx<TextEditingController> _passwordEditingController;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            SvgPicture.asset('assets/svg/person.svg'),
            const SizedBox(width: 10),
            Expanded(
              child: TextField(
                decoration: const InputDecoration(hintText: 'Username'),
                controller: _usernameEditingController.value,
              ),
            ),
          ],
        ),
        const SizedBox(height: 15),
        Row(
          children: [
            SvgPicture.asset('assets/svg/lock.svg'),
            const SizedBox(width: 10),
            Expanded(
              child: Obx(
                () => TextField(
                  obscureText: isObscure.value,
                  decoration: InputDecoration(
                    hintText: 'Password',
                    suffixIcon: IconButton(
                        onPressed: () {
                          isObscure.value = !isObscure.value;
                        },
                        icon: Icon(
                          isObscure.value
                              ? Icons.visibility_off_rounded
                              : Icons.visibility,
                          color: isObscure.value ? null : Utils.mainColor,
                        )),
                  ),
                  controller: _passwordEditingController.value,
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
