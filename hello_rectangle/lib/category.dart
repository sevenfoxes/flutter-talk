import 'package:flutter/material.dart';
import 'package:meta/meta.dart';
import 'package:hello_rectangle/unit.dart';
import 'package:hello_rectangle/converter_page.dart';

final _rowHeight = 100.0;
final _borderRadius = BorderRadius.circular(_rowHeight / 2);

class Category extends StatelessWidget {
  final String name;
  final ColorSwatch color;
  final IconData icon;
  final List<Unit> units;

  const Category({
    Key key,
    @required this.name,
    @required this.color,
    @required this.icon,
    @required this.units,
  })  : assert(name != null),
        assert(color != null),
        assert(icon != null),
        assert(units != null),
        super(key: key);

  void _navigateToConverter(BuildContext context) {
    Navigator
        .of(context)
        .push(MaterialPageRoute<Null>(builder: (BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          elevation: 0.5,
          title: Text(name, style: Theme.of(context).textTheme.display1),
          centerTitle: true,
          backgroundColor: color,
        ),
        body: ConverterRoute(color: color, name: name, units: units),
      );
    }));
  }

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterial(context));

    return Material(
      color: Colors.transparent,
      child: Container(
        padding: EdgeInsets.all(8.0),
        height: _rowHeight,
        child: InkWell(
          splashColor: color,
          highlightColor: color,
          borderRadius: _borderRadius,
          onTap: () => _navigateToConverter(context),
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Padding(
                  child: new Icon(
                    this.icon,
                    size: 60.0,
                  ),
                  padding: EdgeInsets.only(right: 16.0),
                ),
                Center(
                  child: new Text(name,
                      textAlign: TextAlign.center,
                      style: Theme.of(context).textTheme.headline),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
