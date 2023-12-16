docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bazanossava/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t bazanossava/app ../..
