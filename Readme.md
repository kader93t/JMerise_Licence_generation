# JMerise 0.5 Licence generation (Activation with a key)

## Get a free licence of JMerise application

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://www.jfreesoft.com/)

JMerise is an amazing Merise tool to build MCD diagrams if you can buy it please buy it.

## Requirement

- NodeJs envirement
- Iptables
- JMerise 0.5
- Git

## Usage

##### Open terminal and run the following commands

- > git clone https://github.com/kader93t/JMerise_Licence_generation.git
- > cd JMerise_Licence_generation
- > npm install
- > sudo iptables \  
  > --table nat \
  > --append OUTPUT \
  > --protocol tcp \
  > --destination 213.186.33.4 \
  > --jump DNAT \
  > --to-destination 127.0.0.1:3000

- Open the url http://127.0.0.1:3000 on the browser and enter your mac address (Optional) and click generate
- Copy the Licence key \*\*\*dont shutdown the server
- Open JMerise and Enter the copied key, enter your e-mail and click activate.
- Congratulation you have a licence for two years.
- Now you can shutdown the server and run the following commande if your not using iptable before : sudo iptables --table nat --flush

#### Now you're done.
