import 'package:flutter/material.dart';
import 'package:hello_rectangle/category_page.dart';

void main() {
  runApp(new UnitConverterApp());
}

class UnitConverterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Unit Converter',
        home: CategoryRoute());
  }
}
