FROM gcr.io/tensorflow/tensorflow

RUN apt-get update && \
    apt-get install -y git \
        python3 \
        python3-pip \
        apt-utils && \
    apt-get clean

RUN pip3 install -U pip

RUN pip3 --no-cache-dir install \
        tensorflow

WORKDIR /

COPY predict.py predict.py

CMD python3 predict.py ${file_name}