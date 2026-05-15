# Avatar SDK utility: make_context

from core.context import AvatarContext


def make_context_util(ctxmap, basectx):
    return AvatarContext(ctxmap, basectx)
