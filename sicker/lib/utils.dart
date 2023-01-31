import 'package:flutter/material.dart';

class Utils {
  static MaterialColor getMaterialColor(Color color) {
    final Map<int, Color> shades = {
      50: const Color.fromRGBO(136, 14, 79, .1),
      100: const Color.fromRGBO(136, 14, 79, .2),
      200: const Color.fromRGBO(136, 14, 79, .3),
      300: const Color.fromRGBO(136, 14, 79, .4),
      400: const Color.fromRGBO(136, 14, 79, .5),
      500: const Color.fromRGBO(136, 14, 79, .6),
      600: const Color.fromRGBO(136, 14, 79, .7),
      700: const Color.fromRGBO(136, 14, 79, .8),
      800: const Color.fromRGBO(136, 14, 79, .9),
      900: const Color.fromRGBO(136, 14, 79, 1),
    };
    return MaterialColor(color.value, shades);
  }

  static final mainColor = getMaterialColor(const Color(0xFFF36969));
  static final secondaryColor = getMaterialColor(const Color(0xFFf7a5a5));
  static String generateIdentifier(String name, String publisher) {
    String identifier = publisher.toLowerCase();
    name.split(' ').forEach((element) {
      identifier += element;
    });

    return identifier;
  }

  static String baseUrl =
      'https://getpantry.cloud/apiv1/pantry/c1d20e52-2cf6-40f7-80bf-37c1727593b0';
}
