FROM ruby:2.4.5
ENV LANG C.UTF-8

RUN apt-get update -qq
RUN apt-get install -y build-essential
RUN apt-get install -y mysql-client

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get install -y nodejs
RUN apt-get update && apt-get install -y yarn

RUN mkdir /account-bundler
WORKDIR /account-bundler

COPY Gemfile /account-bundler/Gemfile
COPY Gemfile.lock /account-bundler/Gemfile.lock

RUN bundle install
COPY . /account-bundler
