class Expense():
    def __init__(self, id: int, name: str, creator, amount: float, users) -> None:
        self.id = id
        self.name = name
        self.description = ""
        self.creator = creator
        self.users = users
    def getAmount(self):
        return self.amount
    def setDescription(self,description):
        self.description = description
