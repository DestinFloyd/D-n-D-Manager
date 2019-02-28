from rest_framework import serializers 
from .models import Weapon
from .models import Character
from .models import User
from .models import Spell

class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell
        fields = ('spellId', 'name', 'desc', 'range', 'ritual', 'duration', 'concentration', 'casting_time', 'characterId')


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = ('weaponId', 'name', 'damage', 'damageDetails', 'weaponId', 'characterId', 'specialAffects')

class CharacterSerializer(serializers.ModelSerializer):
    weapons = WeaponSerializer(many=True, read_only=True)
    spells = SpellSerializer(many=True, read_only=True)
    class Meta:
        model = Character
        fields = ('characterId', 'userId', 'name', 'race', 'characterClass', 'intelligence', 'dexterity', 'strength', 'wisdom', 'constitution', 'charisma', 'hitPoints', 'ac', 'weapons', 'spells')

class UserSerializer(serializers.ModelSerializer):
    characters = CharacterSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('userId', 'name', 'style', 'characters')


