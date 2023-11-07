package main

import (
	"context"
	"time"

	"github.com/redis/go-redis/v9"
)

// custom session store for the session libary i use because the redis libary i use is better because its from redis themselfs

var Prefix = "session:"

type SessionStore struct {
	client *redis.Client
}

func NewSessionStore(client *redis.Client) *SessionStore {
	return &SessionStore{client}
}

func (r *SessionStore) Find(token string) ([]byte, bool, error) {

	result := r.client.Get(context.Background(), Prefix+token)
	err := result.Err()

	if err != nil {
		return nil, false, err
	}

	b, err := result.Bytes()

	if err != nil {
		return nil, false, err
	}

	return b, true, nil
}

func (r *SessionStore) Commit(token string, b []byte, expiry time.Time) error {
	ctx := context.Background()
	pipe := r.client.TxPipeline()

	pipe.Set(ctx, Prefix+token, b, 0)
	pipe.PExpireAt(ctx, Prefix+token, expiry)

	_, err := pipe.Exec(ctx)
	return err
}

func (r *SessionStore) Delete(token string) error {
	return r.client.Del(context.Background(), Prefix+token).Err()
}
