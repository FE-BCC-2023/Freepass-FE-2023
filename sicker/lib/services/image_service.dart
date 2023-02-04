import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter_image_compress/flutter_image_compress.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';

class ImageService {
  final ImagePicker _picker = ImagePicker();
  Future<String?> pickImage() async {
    XFile? result;
    try {
      result = await _picker.pickImage(source: ImageSource.gallery);
    } catch (e) {
      //TODO: err message
    }
    if (result != null) {
      return result.path;
    }
    return null;
  }

  Future<File?> testCompressConvertAndGetFile(File file) async {
    var dir = await getApplicationDocumentsDirectory();
    final data = await file.readAsBytes();
    String filename = file.path.split('/').last.split('.').first;
    var result = await FlutterImageCompress.compressWithList(data,
        quality: 35,
        format: CompressFormat.webp,
        minWidth: 512,
        minHeight: 512);
    await Directory('${dir.path}/cache/').create();
    File resultFile = await File('${dir.path}/cache/$filename.webp').create();
    resultFile.writeAsBytesSync(result);
    return resultFile;
  }

  Future<File?> testCompressAndGetFile(File file) async {
    var dir = await getApplicationDocumentsDirectory();
    final data = await file.readAsBytes();
    String filename = file.path.split('/').last.split('.').first;
    var result = await FlutterImageCompress.compressWithList(data,
        quality: 80, format: CompressFormat.png);
    await Directory('${dir.path}/cache/').create();
    File resultFile = await File('${dir.path}/cache/$filename.png').create();
    resultFile.writeAsBytesSync(result);
    return resultFile;
  }

  Future<String?> uploadImage(String path) async {
    var dio = Dio();
    dio.options.headers['authorization'] =
        'Bearer public_kW15b3f2pVKMFveE7dYGeYHHQVaz';
    FormData formData = FormData.fromMap({
      "file":
          await MultipartFile.fromFile(path, filename: path.split('/').last),
    });
    try {
      var response = await dio.post(
          "https://api.upload.io/v2/accounts/kW15b3f/uploads/form_data",
          data: formData);

      var body = response.data;
      String url = (body['files'] as List).elementAt(0)['fileUrl'];
      return url;
    } on DioError catch (e) {
      print(e.message);
      return null;
    }
  }
}
