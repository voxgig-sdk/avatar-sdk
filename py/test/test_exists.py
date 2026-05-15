# ProjectName SDK exists test

import pytest
from avatar_sdk import AvatarSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AvatarSDK.test(None, None)
        assert testsdk is not None
