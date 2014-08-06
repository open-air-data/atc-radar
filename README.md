ATC radar locations
======================

[![Build Status](https://travis-ci.org/open-air-data/atc-radar.png?branch=master)](https://travis-ci.org/open-air-data/atc-radar)

This is a shared, open directory of air traffic control radars around
the world.

You can view a [map of the cataloged radars](http://open-air-data.github.io/atc-radar/).


Coordinates
-----------

The latitude, longitude and sometimes elevation (in feet) of each
station are given.


Properties
----------

Each station may have the following properties:

|Property |Description                             |
|---------|----------------------------------------|
|id       |An official ID, FAA or otherwise.       |
|name     |Name of the station.                    |
|type     |The type of radar.                      |
|idents   |a comma-delimited list of II and SI identification codes for the radar. |
|range    |Range of the radar.                     |
|mode_s   |Is it a Mode S SSR?                     |
|source   |Provenance of this record.              |
|comments |Additional comments.                    |


Contributing
------------

The best way to add a new station, add additional information to an
existing station, or correct mistakes in a station's record is to
[send a pull
request](https://help.github.com/articles/using-pull-requests) for the
change.  Make sure to specify your source for the new info.

Otherwise, open an issue explaining the change.


License
-------
Copyright (c) 2013 John Wiseman jjwiseman@gmail.com

This atc-radar database is made available under the Open Database
License: http://opendatacommons.org/licenses/odbl/1.0/ and in the
accompanying [LICENSE-ODBL.md](LICENSE-ODBL.md) file. Any rights in
individual contents of the database are licensed under the Database
Contents License: http://opendatacommons.org/licenses/dbcl/1.0/ and in
the accompanying [LICENSE-DBCL.md](LICENSE-DBCL.md) file.
