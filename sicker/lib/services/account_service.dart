import 'package:dio/dio.dart';
import 'package:sicker/models/account.dart';
import 'package:sicker/utils.dart';

class AccountService {
  String defaultImageUrl = 'https://i.ibb.co/kBJJNRf/FB-IMG-1673688281202.jpg';

  Future<bool> createAccount(String username, String password) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';
    Account account = Account(
        username: username,
        imageUrl: defaultImageUrl,
        password: password,
        createdAt: DateTime.now());

    try {
      await dio.post("${Utils.baseUrl}/basket/$username",
          data: account.toJson());
      return true;
    } on DioError catch (e) {
      print(e.message);
      return false;
    }
  }

  Future<Account?> getAccountUsingPassword(
      String username, String password) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';

    try {
      final response = await dio.get('${Utils.baseUrl}/basket/$username');
      var body = response.data;
      if (body['password'] == password) {
        return Account.fromJson(response.data);
      }
      return null;
    } on DioError catch (e) {
      print(e.message);
      return null;
    }
  }

  Future<bool> auth(String username, String password) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';

    try {
      final response = await dio.get('${Utils.baseUrl}/basket/$username');
      var body = response.data;
      if (body['password'] == password) {
        return true;
      }
      return false;
    } on DioError catch (e) {
      print(e.message);
      return false;
    }
  }

  Future<Account?> getAccountWithoutPassword(String username) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';

    try {
      final response = await dio.get('${Utils.baseUrl}/basket/$username');
      return Account.fromJson(response.data);
    } on DioError catch (e) {
      print(e.message);
      return null;
    }
  }

  Future<bool> deleteAccount(String username, String password) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';
    bool isAuthenticated = await auth(username, password);
    try {
      if (isAuthenticated) {
        await dio.delete('${Utils.baseUrl}/basket/$username');
        return true;
      }
      return false;
    } on DioError catch (e) {
      print(e.message);
      return false;
    }
  }

  Future<bool> updateImageUrl(String imageUrl, String username) async {
    var dio = Dio();
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      await dio.put('${Utils.baseUrl}/basket/$username',
          data: {'imageUrl': imageUrl});
      return true;
    } on DioError catch (e) {
      print(e.message);
      return false;
    }
  }
}
