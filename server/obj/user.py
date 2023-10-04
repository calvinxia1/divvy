
class User():
    def __init__(self, id, name, username: , password: str, balance: float, friends: object[], events):
        self.id = id
        self.name = name
        self.username = username
        self.password = password
        self.balance = balance
        self.friends = friends
        self.events = events


    def addFriend(self, user) -> None:
        self.friends.append(user)
    
    def alterBalance(self, amount) -> None:
        self.balance += amount
    
    
    def getBalance() -> float:
        return self.balance

    
