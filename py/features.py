# Avatar SDK feature factory

from feature.base_feature import AvatarBaseFeature
from feature.test_feature import AvatarTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AvatarBaseFeature(),
        "test": lambda: AvatarTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
