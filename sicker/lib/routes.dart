import 'package:get/get.dart';
import 'package:sicker/views/home_screen.dart';
import 'package:sicker/views/login_screen.dart';
import 'package:sicker/views/make_sticker_screen.dart';
import 'package:sicker/views/sticker_detail_screen.dart';
import 'package:sicker/views/update_profile_screen.dart';

class Routes {
  static String login = '/login-screen';
  static String home = '/home-screen';
  static String updateProfile = '/update_profile-screen';
  static String makeSticker = '/make-sticker-screen';
  static String stickerDetail = '/sticker-detail-screen';

  static String getloginRoute() => login;
  static String getHomeRoute() => home;
  static String getUpdateProfileRoute() => updateProfile;
  static String getMakeStickerRoute() => makeSticker;
  static String getStickerDetailRoute() => stickerDetail;

  static List<GetPage> routes = [
    GetPage(name: login, page: () => LoginScreen()),
    GetPage(name: home, page: () => HomeScreen()),
    GetPage(name: updateProfile, page: () => UpdateProfileScreen()),
    GetPage(name: makeSticker, page: () => MakeStickerScreen()),
    GetPage(name: stickerDetail, page: () => StickerDetailScreen())
  ];
}
