import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/get.dart';
import 'package:sicker/controllers/sticker_maker_controller.dart';
import 'package:sicker/utils.dart';

class MakeStickerScreen extends StatelessWidget {
  MakeStickerScreen({super.key});
  StickerMakerController stickerMakerController =
      Get.put(StickerMakerController());
  final _nameEditingController = TextEditingController().obs;

  bool checkTrayImagePath(String path) {
    if (path == 'assets/images/defaultTray.jpg') return true;
    return false;
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Make a sticker pack'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await stickerMakerController.addSticker();
        },
        backgroundColor: Utils.mainColor.shade200,
        focusElevation: 0,
        elevation: 0,
        child: const Icon(Icons.add),
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Obx(
              () => Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  InkWell(
                    child:
                        checkTrayImagePath(stickerMakerController.image.value)
                            ? Image.asset(
                                stickerMakerController.image.value,
                                height: size.height * 0.2,
                                width: size.height * 0.2,
                              )
                            : Image.file(
                                File(stickerMakerController.image.value),
                                height: size.height * 0.2,
                                width: size.height * 0.2,
                              ),
                    onTap: () async {
                      await stickerMakerController.setTrayImage();
                    },
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(stickerMakerController.name.value),
                            IconButton(
                                onPressed: () {
                                  showDialog(
                                    context: context,
                                    builder: (context) => AlertDialog(
                                      title: const Text('Change name'),
                                      content: TextField(
                                        controller:
                                            _nameEditingController.value,
                                      ),
                                      actions: [
                                        ElevatedButton(
                                            onPressed: () {
                                              stickerMakerController
                                                      .name.value =
                                                  _nameEditingController
                                                      .value.value.text;
                                              Navigator.pop(context);
                                            },
                                            child: const Text('Yes')),
                                        ElevatedButton(
                                            onPressed: () =>
                                                Navigator.pop(context),
                                            child: const Text('Cancel'))
                                      ],
                                    ),
                                  );
                                },
                                icon: const Icon(Icons.edit))
                          ],
                        ),
                        ElevatedButton(
                            onPressed: () async {
                              EasyLoading.show(status: 'loading');
                              bool isSuccess = await stickerMakerController
                                  .uploadStickerPack(Get.arguments['username']);

                              if (isSuccess) {
                                EasyLoading.showSuccess(
                                    'success upload sticker');
                                Get.back();
                              } else {
                                EasyLoading.showError('failed to upload');
                              }
                            },
                            child: const Text('Upload Sticker')),
                      ],
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Expanded(
                child: Obx(
              () => GridView.builder(
                itemBuilder: (context, index) => Image.file(
                    stickerMakerController.stickers.elementAt(index)),
                itemCount: stickerMakerController.stickers.length,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 4,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 20),
              ),
            ))
          ],
        ),
      ),
    );
  }
}
