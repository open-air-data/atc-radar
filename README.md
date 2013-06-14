ATC radar locations
======================

This is a shared, open directory of air traffic control radars around
the world.

To see a map of cataloged radars you can view the
[data/radars.geojson](data/radars.geojson) file.


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
Copyright (c) 2012 John Wiseman jjwiseman@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind,
express or implied, including but not limited to the warranties of
merchantability, fitness for a particular purpose and
noninfringement. In no event shall the authors or copyright holders be
liable for any claim, damages or other liability, whether in an action
of contract, tort or otherwise, arising from, out of or in connection
with the software or the use or other dealings in the software.
