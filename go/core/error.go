package core

type AvatarError struct {
	IsAvatarError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAvatarError(code string, msg string, ctx *Context) *AvatarError {
	return &AvatarError{
		IsAvatarError: true,
		Sdk:              "Avatar",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AvatarError) Error() string {
	return e.Msg
}
