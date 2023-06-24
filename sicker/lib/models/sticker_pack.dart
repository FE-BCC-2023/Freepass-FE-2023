class StickerPack {
  String identifier, name, publisher, trayImage;
  List<String> stickerUrl;
  StickerPack(
      {required this.name,
      required this.publisher,
      required this.trayImage,
      required this.identifier,
      required this.stickerUrl});

  factory StickerPack.fromJson(Map<String, dynamic> json) {
    return StickerPack(
      name: json['name'],
      publisher: json['publisher'],
      trayImage: json['trayImage'],
      identifier: json['identifier'],
      stickerUrl: json['stickerUrl'].cast<String>()
    );
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['identifier'] = identifier;
    data['name'] = name;
    data['stickerUrl'] = stickerUrl;
    data['trayImage'] = trayImage;
    data['publisher'] = publisher;
    return data;
  }
}
