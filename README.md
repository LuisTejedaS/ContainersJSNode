# ContainersJSNode

Dockerized Node app

NODE app.js


## Docker commands

docker rmi (remove an image)
 
docker ps (list containers)

docker rm $(docker ps -a -q) remove all containers

 
docker build . -t containers:latest (tag:version)


docker run -it  -p  80:80 containers:latest   (iteractor puerto host:container)
docker run -it  -p  8080:80 containers:latest   (iteractor puerto host:container)


 
