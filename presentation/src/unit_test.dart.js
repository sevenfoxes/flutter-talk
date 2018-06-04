export default `
import 'package:test/test.dart';

void main() {
  test('my first unit test', () {
    var answer = 42;
    expect(answer, 42);
  });
}


import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('my first widget test', (WidgetTester tester) async {
    // You can use keys to locate the widget you need to test
    var sliderKey = new UniqueKey();
    var value = 0.0;

    // Tells the tester to build a UI based on the widget tree passed to it
    await tester.pumpWidget(
      new StatefulBuilder(
        builder: (BuildContext context, StateSetter setState) {
          return new MaterialApp(
            home: new Material(
              child: new Center(
                child: new Slider(
                  key: sliderKey,
                  value: value,
                  onChanged: (double newValue) {
                    setState(() {
                      value = newValue;
                    });
                  },
                ),
              ),
            ),
          );
        },
      ),
    );
    expect(value, equals(0.0));

    // Taps on the widget found by key
    await tester.tap(find.byKey(sliderKey));

    // Verifies that the widget updated the value correctly
    expect(value, equals(0.5));
  });
}


import 'dart:async';

// Imports the Flutter Driver API
import 'package:flutter_driver/flutter_driver.dart';
import 'package:test/test.dart';

void main() {
  group('scrolling performance test', () {
    FlutterDriver driver;

    setUpAll(() async {
      // Connects to the app
      driver = await FlutterDriver.connect();
    });

    tearDownAll(() async {
      if (driver != null) {
        // Closes the connection
        driver.close();
      }
    });

    test('measure', () async {
      // Record the performance timeline of things that happen inside the closure
      Timeline timeline = await driver.traceAction(() async {
        // Find the scrollable user list
        SerializableFinder userList = find.byValueKey('user-list');

        // Scroll down 5 times
        for (int i = 0; i < 5; i++) {
          // Scroll 300 pixels down, for 300 millis
          await driver.scroll(
              userList, 0.0, -300.0, new Duration(milliseconds: 300));

          await new Future<Null>.delayed(new Duration(milliseconds: 500));
        }

        for (int i = 0; i < 5; i++) {
          await driver.scroll(
              userList, 0.0, 300.0, new Duration(milliseconds: 300));
          await new Future<Null>.delayed(new Duration(milliseconds: 500));
        }
      });

      TimelineSummary summary = new TimelineSummary.summarize(timeline);

      summary.writeSummaryToFile('scrolling_performance', pretty: true);

      summary.writeTimelineToFile('scrolling_performance', pretty: true);
    });
  });
}
`;
