image_name="deepinnet-h5-product"

npm run build:dev

docker build --pull --rm -f "Dockerfile" -t ${image_name}:latest "."

docker save ${image_name} | gzip > deepinnet-h5-product.tar.gz

# echo 手动加载
# echo docker load -i /tmp/image.tar.gz
# echo 手动打tag,注意修改版本号码:
# echo docker tag ${image_name}:latest ${image_name}:1.1.1010
