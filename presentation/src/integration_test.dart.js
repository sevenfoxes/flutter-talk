export default `
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
      Timeline timeline = await driver.traceAction(() async {
        SerializableFinder userList = find.byValueKey('user-list');

        for (int i = 0; i < 5; i++) {
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
