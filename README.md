HashSaver
=========
Some browsers (typically older versions of IE) have trouble keeping track of a URL containing a hash fragment if there is a redirect involved, this solves that problem.

Simply have your server handle the final redirect:

```
http://example.com/redirect?d=http%3A%2F%2Fexample.com&h=hashValue
```
or alternatively

```
http://example.com/redirect?u=http%3A%2F%2Fexample.com%23hashValue
```

License
=======
This software is provided under a BSD 2-Clause license.