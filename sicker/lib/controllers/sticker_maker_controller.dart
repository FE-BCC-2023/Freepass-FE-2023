import 'dart:io';
import 'package:get/get.dart';
import 'package:sicker/models/sticker_pack.dart';
import 'package:sicker/services/image_service.dart';
import 'package:sicker/services/sticker_service.dart';
import 'package:sicker/utils.dart';

class StickerMakerController extends GetxController {
  Rx<String> image = 'assets/images/defaultTray.jpg'.obs;

  RxList<File> stickers = <File>[].obs;
  Rx<String> name = 'Sticker Pack Name'.obs;

  Future<bool> setTrayImage() async {
    ImageService imageService = ImageService();
    var pickedImage = await imageService.pickImage();

    if (pickedImage != null) {
      var result = await imageService.testCompressAndGetFile(File(pickedImage));
      if (result != null) {
        image.value = result.path;
        return true;
      }
    }
    return false;
  }

  Future<void> addSticker() async {
    ImageService imageService = ImageService();
    var pickedImage = await imageService.pickImage();

    if (pickedImage != null) {
      var result =
          await imageService.testCompressConvertAndGetFile(File(pickedImage));
      if (result != null) {
        stickers.add(result);
      }
    }
  }

  Future<bool> uploadStickerPack(String publisher) async {
    List<String> listPath = [];

    await Future.forEach(stickers, (element) async {
      var upload = await ImageService().uploadImage(element.path);
      if (upload != null) {
        listPath.add(upload);
      }
    });
    if (stickers.length != listPath.length || listPath.isEmpty) return false;
    String? uploadedTrayImage = await ImageService().uploadImage(image.value);

    if (uploadedTrayImage == null) return false;

    var stickerPack = StickerPack(
        name: name.value,
        publisher: publisher,
        trayImage: uploadedTrayImage,
        identifier: Utils.generateIdentifier(name.value, publisher),
        stickerUrl: listPath);

    var result = await StickerService().uploadStickerPack(stickerPack);
    return result;
  }
}
