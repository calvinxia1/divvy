class Event():
    def __init__(self, id: int, name: str, users, expenses):
        self.id = id
        self.name = name
        self.users = users
        self.expenses = expenses
        self.total = 0
        for expense in self.expenses:
            self.total += expense.getAmount()
    

    def addUser(self, user):
        self.users.append(user)


    def addExpense(self, expense):
        self.expenses.append(expense)
        self.calculateTotal()

    def calculateTotal(self) -> float:
        self.total = 0
        for expense in self.expenses:
            self.total += expense.getAmount()
