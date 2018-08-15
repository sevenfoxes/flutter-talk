import 'package:flutter/material.dart';
import 'package:hello_rectangle/category.dart';

void main() {
  runApp(new UnitConverterApp());
}

class UnitConverterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Unit Converter',
      home: Scaffold(
        backgroundColor: Colors.green[100],
        body: Center(
          child: Category(
            name: 'Cake',
            icon: Icons.cake,
            color: Colors.green,
          ),
        ),
      ),
    );
  }
}
