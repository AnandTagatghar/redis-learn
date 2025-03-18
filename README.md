# redis-learn

learning redis for cache data return

tried https:// to connect and have implemented using the https and created server.key & server.cert files and used that in creating server

## implementation done for cache redis usage

~ done a small backend project that we hit the url and the user will be registered.<br>
~ for the first time login user will be fetched from the DB and stored in the cache redis.<br>
~ And from the second run the user will receive the login success message from the cache using the redis

### i feel like this is really useful the learn, observed that after implementing it is taking only 5-6ms and fetching from the db it is taking around 200ms.

~ Nodemon is installed for development
