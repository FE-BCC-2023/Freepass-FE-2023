import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:sicker/controllers/account_controller.dart';
import 'package:sicker/controllers/stickers_controller.dart';
import 'package:sicker/models/account.dart';
import 'package:sicker/routes.dart';
import 'package:sicker/utils.dart';
import 'package:sicker/views/widgets/home_screen_drawer.dart';

class HomeScreen extends StatelessWidget {
  final accountController = Get.put(AccountController());
  final stickersController = Get.put(
      StickersController((Get.arguments['account'] as Account).username));
  Account acc = Get.arguments['account'];
  HomeScreen({super.key});
  var title = 'Your Sticker'.obs;
  final _index = 0.obs;
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    accountController.account = acc.obs;
    return Scaffold(
      appBar: AppBar(title: Obx(() => Text(title.value))),
      drawer:
          HomeScreenDrawer(size: size, accountController: accountController),
      bottomNavigationBar: CurvedNavigationBar(
        // ignore: prefer_const_literals_to_create_immutables
        items: [
          SvgPicture.asset(
            'assets/svg/sticker.svg',
            width: 30,
            color: Colors.white,
          ),
          const Icon(
            Icons.list,
            color: Colors.white,
            size: 30,
          )
        ],
        color: Utils.mainColor,
        backgroundColor: Colors.white,
        animationDuration: const Duration(milliseconds: 500),
        height: 60,
        onTap: (index) {
          _index.value = index;
          if (index == 0) {
            title.value = 'Your Sticker';
          } else {
            title.value = 'List Sticker';
          }
        },
      ),
      body: Obx(
        () => _index.value == 0
            ? Stack(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(10),
                    child: RefreshIndicator(
                      onRefresh: () async {
                        await stickersController.loadUserStickerPack();
                      },
                      child: ListView.separated(
                        separatorBuilder: (context, index) => const SizedBox(
                          height: 10,
                        ),
                        itemBuilder: (context, index) => ListTile(
                          onTap: () =>
                              Get.toNamed(Routes.stickerDetail, arguments: {
                            'stickerPack': stickersController.userStickerPack
                                .elementAt(index),
                            'controller': stickersController
                          }),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15)),
                          tileColor: Utils.secondaryColor,
                          textColor: Colors.white,
                          leading: SizedBox(
                            height: size.height * 0.1,
                            width: size.height * 0.1,
                            child: Image.network(stickersController
                                .userStickerPack
                                .elementAt(index)
                                .trayImage),
                          ),
                          title: Text(stickersController.userStickerPack
                              .elementAt(index)
                              .name),
                          subtitle: Text(stickersController.userStickerPack
                              .elementAt(index)
                              .publisher),
                        ),
                        itemCount: stickersController.userStickerPack.length,
                      ),
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(20),
                            child: FloatingActionButton(
                              onPressed: () {
                                Get.toNamed(Routes.makeSticker, arguments: {
                                  'username': acc.username,
                                  'stickersController': stickersController
                                });
                              },
                              backgroundColor: Utils.secondaryColor,
                              focusElevation: 0,
                              elevation: 0,
                              child: const Icon(Icons.add),
                            ),
                          ),
                        ],
                      ),
                    ],
                  )
                ],
              )
            : Padding(
                padding: const EdgeInsets.all(10),
                child: RefreshIndicator(
                  onRefresh: () async {
                    await stickersController.loadListSticker();
                  },
                  child: ListView.separated(
                    separatorBuilder: (context, index) => const SizedBox(
                      height: 10,
                    ),
                    itemBuilder: (context, index) => ListTile(
                      onTap: () =>
                          Get.toNamed(Routes.stickerDetail, arguments: {
                        'stickerPack':
                            stickersController.allStickerPack.elementAt(index),
                        'controller': stickersController
                      }),
                      leading: SizedBox(
                        height: size.height * 0.1,
                        width: size.height * 0.1,
                        child: Image.network(stickersController.allStickerPack
                            .elementAt(index)
                            .trayImage),
                      ),
                      title: Text(stickersController.allStickerPack
                          .elementAt(index)
                          .name),
                      subtitle: Text(stickersController.allStickerPack
                          .elementAt(index)
                          .publisher),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15)),
                      tileColor: Utils.secondaryColor,
                      textColor: Colors.white,
                    ),
                    itemCount: stickersController.allStickerPack.length,
                  ),
                ),
              ),
      ),
    );
  }
}
