class Account {
  String username;
  String password;
  String imageUrl;
  DateTime createdAt;
  Account(
      {required this.username,
      required this.imageUrl,
      required this.password,
      required this.createdAt});

  factory Account.fromJson(Map<String, dynamic> json) {
    return Account(
        imageUrl: json['imageUrl'],
        password: json['password'],
        username: json['username'],
        createdAt: DateTime.fromMillisecondsSinceEpoch(json['createdAt']));
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['username'] = username;
    data['password'] = password;
    data['imageUrl'] = imageUrl;
    data['createdAt'] = createdAt.millisecondsSinceEpoch;
    return data;
  }
}
