import random

upper = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
lower = upper.lower()
digits = "0123456789"
symbols = "!~@#$%&*+?;,"
all= upper + lower + digits + symbols
length = int(input("How many characters should your password contain: "))

password = "".join(random.sample(all,length))
print(password)