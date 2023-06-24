import 'dart:io';

import 'package:dio/dio.dart';
import 'package:get/get.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart';
import 'package:sicker/models/sticker_pack.dart';
import 'package:sicker/services/sticker_service.dart';
import 'package:whatsapp_stickers_plus/exceptions.dart';
import 'package:whatsapp_stickers_plus/whatsapp_stickers.dart';

class StickersController extends GetxController {
  RxList<StickerPack> allStickerPack = <StickerPack>[].obs;
  RxList<StickerPack> userStickerPack = <StickerPack>[].obs;
  String username;
  StickersController(this.username);
  @override
  void onInit() {
    loadListSticker();
    loadUserStickerPack();
    super.onInit();
  }

  Future<bool> sendToWhatsApp(StickerPack stickerPack) async {
    //trayImage must be png and webp for stickers
    //size of both <=512px and ratio 1:1
    final appDir = await getApplicationDocumentsDirectory();
    final stickersDir = Directory('${appDir.path}/stickercache');
    await stickersDir.create(recursive: true);
    final imageFileName = basename(stickerPack.trayImage);
    final dio = Dio();

    await Future.forEach(stickerPack.stickerUrl, (element) async {
      String fileName = basename(element);
      await dio.download(element, '${stickersDir.path}/$fileName');
    });

    await dio.download(
        stickerPack.trayImage, '${stickersDir.path}/$imageFileName}');
    var stickers = WhatsappStickers(
        identifier: stickerPack.identifier,
        trayImageFileName:
            WhatsappStickerImage.fromAsset('assets/images/trayImage.png'),
        name: stickerPack.name,
        publisher: stickerPack.publisher,
        publisherWebsite: '',
        privacyPolicyWebsite: '',
        licenseAgreementWebsite: '');

    for (var element in stickerPack.stickerUrl) {
      String fileName = basename(element);
      stickers.addSticker(
          WhatsappStickerImage.fromFile('${stickersDir.path}/$fileName'),
          ['😄', '😀']);
    }

    try {
      await stickers.sendToWhatsApp();
      return true;
    } on WhatsappStickersException catch (e) {
      print(e.cause);
      return false;
    }
  }

  Future<void> loadListSticker() async {
    try {
      final result = await StickerService().getListSticker();
      if (result != null) {
        allStickerPack.value = result;
      }
    } finally {

    }
  }

  Future<void> loadUserStickerPack() async {
    try {
      final result = await StickerService().getUserListSticker(username);
      if (result != null) {
        userStickerPack.value = result;
      }
    } finally {

    }
  }
}
