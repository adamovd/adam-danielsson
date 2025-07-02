import {SchemaTypeDefinition} from 'sanity'
import {authorType} from './author-type'
import {featuresType} from './blocks/features-type'
import {galleryType} from './blocks/gallery-type'
import {heroType} from './blocks/hero-type'
import {linkType} from './blocks/link-type'
import {navigationItemType} from './blocks/nav-item-type'
import {splitImageType} from './blocks/splitimage-type'
import {categoryType} from './category-type'
import {navigationType} from './navigation-type'
import {pageBuilderType} from './page-builder-type'
import {pageType} from './page-type'
import {postType} from './post-type'
import {projectType} from './project-type'
import {siteConfigType} from './site-config-type'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    siteConfigType,
    postType,
    pageType,
    projectType,
    categoryType,
    authorType,
    pageBuilderType,
    navigationType,
    navigationItemType,
    featuresType,
    heroType,
    splitImageType,
    linkType,
    galleryType,
  ],
}
export default schema
