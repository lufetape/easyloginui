#
# This source code is the confidential, proprietary information of
# Cafeto Software S.A.S. here in, you may not disclose such Information,
# and may only use it in accordance with the terms of the license
# agreement you entered into with Cafeto Software S.A.S.
#
# 2016: Cafeto Software S.A.S.
# All Rights Reserved.
#

FROM node:5.2

MAINTAINER Aslhey Ramirez "aramirez@cafetosoftware.com"

RUN apt-get update \
  && apt-get install -y unzip \
  && rm -rf /var/lib/apt/lists/* \
  && useradd -m siklus \
  && chown -R siklus /home/siklus

WORKDIR /home/siklus

COPY bin/*.zip app/sli.zip

RUN cd $PWD/app \
    && unzip sli.zip \
    && rm sli.zip \
    && npm install

RUN chown -R siklus /home/siklus

RUN echo 'This image contains: Node 5.2 - Easy Login UI'
USER siklus
CMD ["node", "/home/siklus/app/app.server.prod.js"]
