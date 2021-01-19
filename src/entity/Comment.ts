import {Entity, ManyToOne, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  content: string;
  @CreateDateColumn({ type: 'timestamp'})
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamp'})
  updatedAt: Date;
  @ManyToOne(type => User, user => user.comments)
  user: User;
  @ManyToOne(type => Post, post => post.comments)
  post: Post;
}
