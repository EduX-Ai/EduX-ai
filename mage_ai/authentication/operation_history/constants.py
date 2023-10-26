from enum import Enum

MAGE_OPERATION_HISTORY_DIRECTORY_DEFAULT = '.operation_history'
MAGE_OPERATION_HISTORY_DIRECTORY_ENVIRONMENT_VARIABLE_NAME = 'MAGE_OPERATION_HISTORY_DIRECTORY'


class ResourceType(str, Enum):
    PIPELINE = 'pipeline'
