import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:sicker/models/sticker_pack.dart';
import 'package:sicker/utils.dart';

class StickerService {
  Future<bool> uploadStickerPack(StickerPack stickerPack) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';
    List<StickerPack> list = [];

    var listStickerFromApi = await getListSticker();
    if (listStickerFromApi != null) {
      list.addAll(listStickerFromApi);
    }
    list.add(stickerPack);
    var data = jsonEncode(list);
    try {
      await dio
          .post('${Utils.baseUrl}/basket/stickers', data: {'stickers': data});
      return true;
    } on DioError catch (e) {
      print(e.message);
    }
    return false;
  }

  Future<List<StickerPack>?> getListSticker() async {
    Dio dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      final response = await dio.get('${Utils.baseUrl}/basket/stickers');
      List<StickerPack> stickerPack = [];
      var result = jsonDecode(response.data['stickers']);
      for (var element in (result as List<dynamic>)) {
        stickerPack.add(StickerPack.fromJson(element));
      }
      if (stickerPack.isNotEmpty) {
        return stickerPack;
      }
    } on DioError catch (e) {
      print(e.message);
    }
    return null;
  }

  Future<List<StickerPack>?> getUserListSticker(String username) async {
    List<StickerPack>? list = await getListSticker();
    List<StickerPack> result = [];
    if (list != null) {
      for (var element in list) {
        if (element.publisher == username) result.add(element);
      }
      if (result.isNotEmpty) return result;
    }
    return null;
  }
}
