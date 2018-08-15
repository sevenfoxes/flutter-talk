import 'package:flutter/material.dart';

class Category extends StatelessWidget {
  final name;
  final icon;
  final color;

  Category(
      {Key key,
      @required this.color,
      @required this.icon,
      @required this.name});

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterial(context));

    return Material(
      color: Colors.transparent,
      child: Container(
        padding: EdgeInsets.all(16.0),
        child: InkWell(
          splashColor: color[50],
          highlightColor: color[100],
          onTap: () {
            print('I was tapped');
          },
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Padding(
                  child: new Icon(
                    this.icon,
                    size: 40.0,
                  ),
                  padding: EdgeInsets.only(right: 16.0),
                ),
                Center(
                  child: Text(this.name),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
