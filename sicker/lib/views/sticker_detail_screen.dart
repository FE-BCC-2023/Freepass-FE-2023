import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:sicker/controllers/stickers_controller.dart';
import 'package:sicker/models/sticker_pack.dart';
import 'package:sicker/utils.dart';

class StickerDetailScreen extends StatelessWidget {
  StickerDetailScreen({super.key});
  StickerPack stickerPack = Get.arguments['stickerPack'];
  StickersController stickersController = Get.arguments['controller'];
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sticker Detail'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Image.network(
                  stickerPack.trayImage,
                  height: size.height * 0.2,
                  width: size.height * 0.2,
                ),
                const SizedBox(
                  width: 10,
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      stickerPack.name,
                      style: TextStyle(color: Utils.mainColor, fontSize: 20),
                    ),
                    Text('Created by ${stickerPack.publisher}'),
                    const SizedBox(
                      height: 70,
                    ),
                    ElevatedButton.icon(
                        style: ButtonStyle(
                            padding: MaterialStateProperty.all(
                                const EdgeInsets.symmetric(
                                    horizontal: 15, vertical: 7)),
                            shape: MaterialStateProperty.all<
                                RoundedRectangleBorder>(RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(18.0),
                            ))),
                        onPressed: () async {
                          EasyLoading.show(status: 'loading');
                          bool isSuccess = await stickersController
                              .sendToWhatsApp(stickerPack);
                          if (isSuccess) {
                            EasyLoading.showSuccess('success');
                          } else {
                            EasyLoading.showError('failed');
                          }
                        },
                        icon: SvgPicture.asset(
                          'assets/svg/whatsapp.svg',
                          height: 30,
                          color: Colors.white,
                        ),
                        label: const Text('Add to Whatsapp'))
                  ],
                )
              ],
            ),
            const SizedBox(
              height: 20,
            ),
            Expanded(
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 4,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 20),
                itemBuilder: (context, index) =>
                    Image.network(stickerPack.stickerUrl.elementAt(index)),
                itemCount: stickerPack.stickerUrl.length,
              ),
            )
          ],
        ),
      ),
    );
  }
}
