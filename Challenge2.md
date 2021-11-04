# CircleCi Challenge2

I have tried several times and in new terminals to run the CircleCi Challenge2.  The first time, I confirmed the localhost:8080 was not working.  When I went back to further examine, I was unable to get back into the container.  I am assuming the container stopped working.  To answer your question, here is how I would troubleshoot the issue of the docker container not showing localhost:8080.  First look at the docker logs to see if I can find any errors.  I would try the following command to obtain the logs docker-compose logs.

https://stackoverflow.com/questions/61933047/docker-http-localhost8000-it-is-not-working

If I cannot see any relevant logs, I can test whether or not it is a port mapping issue