# FROM nginx
FROM deepinnet-k8s-image-registry.cn-hangzhou.cr.aliyuncs.com/deepinnet/nginx:nginx-1.23.2

# # FROM deepinnet-k8s-image-registry-vpc.cn-hangzhou.cr.aliyuncs.com/deepinnet/nginx:nginx-1.23.2

# WORKDIR /usr/share/nginx/html
# COPY ./dist /usr/share/nginx/html
# EXPOSE 80
# FROM nginx

WORKDIR /public

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/TKlDTbmdrF.txt /usr/share/nginx/TKlDTbmdrF.txt

COPY ./dist /public/
