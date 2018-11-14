# Express 4.16.4
Node v8.11 with express and yarn  
```
    volumes:
        - "./manifest/config/nginx.conf:/etc/nginx/nginx.conf:ro"
        - "./manifest/config/supervisord.conf:/etc/supervisor/conf.d/supervisord.conf:ro"
        - "./manifest/app:/app"
```
## Install
```
 npm i express -s
 or 
  yarn add express -S
  
  --template
  yarn add ejs -S
```


## Getting Started

 ```
 docker-compose up -d
 ```


## Connect to Container
 ```
 ./connect
 ```

## Build Container
 ```
 ./build.sh
 ```
       
        
    