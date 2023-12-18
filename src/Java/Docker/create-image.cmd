docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ilya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ilya-java/app ../../..
