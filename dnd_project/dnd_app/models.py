from django.db import models

# Create your models here.
class User(models.Model):
    userId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    style = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return self.name

class Character(models.Model):
    characterId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE, related_name="characters")
    name = models.CharField(max_length=225)
    race = models.CharField(max_length=225)
    characterClass = models.CharField(max_length=225)
    intelligence =  models.IntegerField(default=0)
    dexterity =  models.IntegerField(default=0)
    strength =  models.IntegerField(default=0)
    wisdom =  models.IntegerField(default=0)
    constitution = models.IntegerField(default=0)
    charisma = models.IntegerField(default=0)
    hitPoints =  models.IntegerField(default=10)
    ac =  models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Weapon(models.Model):
    name = models.CharField(max_length=50)
    damage = models.TextField()
    damageDetails = models.TextField(null=True, blank=True)
    weaponId = models.AutoField(primary_key=True)
    characterId = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="weapons")
    specialAffects = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name

class Spell(models.Model):
        spellId = models.AutoField(primary_key=True)
        name = models.CharField(max_length=50)
        desc = models.TextField()
        # higher_level = models.TextField(null=True, blank=True)
        range = models.CharField(max_length=240)
        ritual = models.CharField(max_length=15)
        duration = models.CharField(max_length=50)
        concentration = models.CharField(max_length=50)
        casting_time = models.CharField(max_length=255)
        characterId = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="spells")
        
        def __str__(self):
            return self.name

    
