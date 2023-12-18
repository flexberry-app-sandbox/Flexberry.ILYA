docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ilya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ilya/app ../..
